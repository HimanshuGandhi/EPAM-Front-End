

const appRoot = document.getElementById('app-root');
appRoot.classList.add('container');

 //creating header, form element and appending to appRoot
const form = document.createElement('form');
const br = document.createElement('br');
const header = document.createElement('h1');
header.innerText = 'Countries Search';
header.style.textDecoration='underline';
appRoot.appendChild(header);

const label = document.createElement('label');
label.innerText = 'Please choose type of serach:';
appRoot.appendChild(form);

//creating radio button for region and appending to div
const Regionradio = document.createElement('input');
const radioLabel = document.createElement('label');
radioLabel.innerHTML = 'By region<br/>';
Regionradio.type = 'radio';
Regionradio.name = 'search';
Regionradio.id = 'region';
Regionradio.value = 'region';

const div=document.createElement('div');
div.id='radios'
form.appendChild(div);
div.appendChild(label)

div.appendChild(Regionradio);
div.appendChild(radioLabel);

 //creating radio button for language and appending to div
const languageradio = document.createElement('input');
const languageLabel = document.createElement('label');
languageLabel.innerText = 'By Language';
languageradio.setAttribute('name', 'search');
languageradio.setAttribute('type', 'radio');
languageradio.setAttribute('id', 'language');
languageradio.setAttribute('value', 'language');

div.appendChild(languageradio);
div.appendChild(languageLabel);

 //Search query field
const searchQuery = document.createElement('label');
searchQuery.innerHTML = ' <br/>🔎Please Choose Search Query:  ';
form.appendChild(searchQuery);

const select = document.createElement('select');
select.disabled = true;
select.id = 'select';
select.appendChild(document.createElement('option')).textContent =
  'Select Value';
form.appendChild(select);
const div1=document.createElement('div');
div1.id='tableId';
form.appendChild(div1);


const regionsList = externalService.getRegionsList();
const languagesList = externalService.getLanguagesList();

const radioId1 = document.getElementById('region');
const radioId2 = document.getElementById('language');


// sorting country in increasing order 
function countryAscending(){

          let table, i, x, y;
          table = document.getElementById('table2');
          let switching = true;

          while (switching) {
            switching = false;
            let rows = table.rows;
            let shouldSwitch;
          
            for (i = 1; i < rows.length - 1; i++) {
              shouldSwitch = false;

              x = rows[i].getElementsByTagName('TD')[0];
              y = rows[i + 1].getElementsByTagName('TD')[0];

              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

                shouldSwitch = true;
                break;
              }
            }
            if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
            }
          }

}


// sorting country in decreasing order 
function countryDescending(){

        let table, i, x, y;
        table = document.getElementById('table2');
        let switching = true;


        while (switching) {
          switching = false;
          let rows = table.rows;
          let shouldSwitch;
       
          for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;

    
            x = rows[i].getElementsByTagName('TD')[0];
            y = rows[i + 1].getElementsByTagName('TD')[0];

            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }

}

// sorting area in increasing order 
function areaAscending(){
 
          let table, i, x, y;
          table = document.getElementById('table2');
          let switching = true;

          while (switching) {
            switching = false;
            let rows = table.rows;
            let shouldSwitch;

            for (i = 1; i < rows.length - 1; i++) {
              shouldSwitch = false;
 
              x = rows[i].getElementsByTagName('TD')[4];
              y = rows[i + 1].getElementsByTagName('TD')[4];

              if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
              }
            }
            if (shouldSwitch) {
    
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
            }
          }
        
}


// sorting area in decreasing order 
function areaDescending(){

  let table, i, x, y;
  table = document.getElementById('table2');
  let switching = true;

  while (switching) {
    switching = false;
    let rows = table.rows;
    let shouldSwitch;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('TD')[4];
      y = rows[i + 1].getElementsByTagName('TD')[4];

      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

}


//creating and updating table
function updatetable(optionValue,radioValue){
  const div11=document.getElementById('tableId');
  div11.innerText='';
  const table = document.createElement('table');
  table.id = 'table2';
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  const tr = document.createElement('tr');
  tbody.appendChild(tr);
  const th = document.createElement('th');
  th.innerHTML = 'Country Name   <span class=" arrow" value="increasing">&#8593;</span>';
  tr.appendChild(th);
  const th2 = document.createElement('th');
  th2.innerText = 'Capital';
  tr.appendChild(th2);
  const th3 = document.createElement('th');
  th3.innerText = 'World Region';
  tr.appendChild(th3);
  const th4 = document.createElement('th');
  th4.innerText = 'Language';
  th4.classList.add('languages');
  tr.appendChild(th4);
  const th5 = document.createElement('th');
  th5.innerHTML ='Area <span class="upDownArrow arrowR" value="unsort">&#8597;</span>';
  tr.appendChild(th5);
  const th6 = document.createElement('th');
  th6.innerHTML = 'Flag';
  tr.appendChild(th6);
  div1.appendChild(table);
  const listByLanguage =
    externalService.getCountryListByLanguage(optionValue);
  const listByRegion=externalService.getCountryListByRegion(optionValue);
  let lists;
  if(radioValue==='region'){
    lists=listByRegion;
  }else if(radioValue==='language'){
    lists=listByLanguage;
  }
  lists.forEach((countryDetail) => {
    const tr1 = document.createElement('tr');
    tr1.id='trow';
    tbody.appendChild(tr1);
    for (let i=0; i < 6; ++i) {

      const td = document.createElement('td');
      tr1.appendChild(td);
      if (i === 0) {
        td.innerHTML = countryDetail['name'];
      } else if (i === 1) {
        td.innerHTML = countryDetail['capital'];
      } else if (i === 2) {
        td.innerHTML = countryDetail['region'];
      } else if (i === 3) {
        const languages = countryDetail['languages'];
        for (const lang in languages) {
          if (true) {
            const element = languages[lang];
            td.innerHTML += `${element}, `;
          }
        }
      } else if (i === 4) {
        td.innerHTML = countryDetail['area'];
      } else if (i === 5) {
        const img = document.createElement('img');
        const url =countryDetail['flagURL'];
        img.src=`${url}`
        td.appendChild(img);
      }
    }

  })
  countryAscending();

  const countryAsc = document.querySelector('.arrow');
let sort=countryAsc.getAttribute('value');
const areaAsc = document.querySelector('.arrowR');
  let sortA=areaAsc.getAttribute('value');
  countryAsc.addEventListener('click',function(){
    areaAsc.innerHTML='&#8597;';
    areaAsc.setAttribute('value','unsort');
    if(sort==='unsort'){
      countryAscending();
      countryAsc.innerHTML='&#8593';
    countryAsc.setAttribute('value','increasing');
    sort='increasing';
    }else if(sort==='increasing'){

      countryDescending();
      countryAsc.innerHTML='&#8595;'
      countryAsc.setAttribute('value','decreasing');
      sort='decreasing';
   }else if(sort==='decreasing'){
    countryAscending()
    countryAsc.innerHTML='&#8593;'
    countryAsc.setAttribute('value','increasing');
    sort='increasing';
   }
  })

  areaAsc.addEventListener('click',function(){
    countryAsc.innerHTML='&#8597;';
    countryAsc.setAttribute('value','unsort');
    if(sortA==='unsort'){
      areaAscending();
      areaAsc.innerHTML='&#8593';
    areaAsc.setAttribute('value','increasing');
    sortA='increasing';
    }else if(sortA==='increasing'){
      areaDescending();
      areaAsc.innerHTML='&#8595';
      areaAsc.setAttribute('value','decreasing');
      sortA='decreasing';
   }else if(sortA==='decreasing'){
    areaAscending()
    areaAsc.innerHTML='&#8593';
    areaAsc.setAttribute('value','increasing');
    sortA='increasing';
   }
  })
 
}

const p = document.createElement('p');
p.id='para1'
p.innerText = '';
p.innerText = 'No Items, Please Choose Search Query';

//selecting radio button
const r=document.getElementById('radios');
r.addEventListener('change',function(e){
let radioValue=e.target.value;
select.innerHTML = '';
select.appendChild(document.createElement('option')).textContent ='Select value';
  const selectElement = document.getElementById('select');
if(radioValue==='region'){
  regionsList.forEach((region) => {
    const option = document.createElement('option');
    option.value = region;
    option.textContent = region;
    select.appendChild(option);
  });
  if(selectElement.value==='Select value'){
    const tableDiv = document.getElementById('tableId');
      tableDiv.innerText = '';
    p.innerText = 'No items, please choose search query';
    form.appendChild(p)
  }

  selectElement.addEventListener('input', function (e) {
    p.innerText='';
    let optionValue = e.target.value;
    // eslint-disable-next-line brace-style
    updatetable(optionValue,radioValue) })
}
select.disabled = false;

if(radioValue==='language'){
  languagesList.forEach((language) => {
    const option = document.createElement('option');
    option.value = language;
    option.textContent = language;
    select.appendChild(option);
  });
  if(selectElement.value==='Select value'){
    const tableDiv = document.getElementById('tableId');
      tableDiv.innerText = '';
    p.innerText = 'No items, Please Choose Search Query ☹';
    form.appendChild(p)
  }
  selectElement.addEventListener('input', function (e) {
    p.innerText='';
    let optionValue = e.target.value;
    // eslint-disable-next-line brace-style
    updatetable(optionValue,radioValue) })
}
select.disabled = false;
})


