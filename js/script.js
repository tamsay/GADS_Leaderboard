var dataSet = [
    {
        
        "name": "Ram Dhuram",
        "score": {
            iq: 110,
            hours: 151,
        },
        "country": "Morocco"
    },
    {
        
        "name": "Ninja Raju",
        "score": {
            iq: 155,
            hours: 41,
        },        
        "country": "Ghana"
    },
    {
        
        "name": "Rani Sanju",
        "score": {
            iq: 70,
            hours: 21,
        },        
        "country": 'India'
    },
    {
        
        "name": "Johan Rastogi",
        "score": {
            iq: 55,
            hours: 61,
        },        
        "country": "Egypt"
    },
    {
        
        "name": "Shajia Taofeek",
        "score": {
            iq: 80,
            hours: 61,
        },
        "country": "Togo",
    },
    {
        
        "name": "Michael Abdul",
        "score": {
            iq: 100,
            hours: 201,
        },
        "country": "Malawi"
    },
    {
        
        "name": "Kofi Nana",
        "score": {
            iq: 135,
            hours: 141,
        },        
        "country": "Benin"
    },
    {
        
        "name": "Kelembe Gabriel",
        "score": {
            iq: 120,
            hours: 121,
        },        
        "country": 'Kenya'
    },
    {
        
        "name": "Drupal Joomla",
        "score": {
            iq: 95,
            hours: 51,
        },        
        "country": "China"
    },
    {
        
        "name": "Javascript Api",
        "score": {
            iq: 210,
            hours: 250,
        },
        "country": "Nigeria",
    },
    {
        
        "name": "Tayo Gabriel",
        "score": {
            iq: 180,
            hours: 111,
        },        
        "country": 'Canada'
    },
    {
        
        "name": "John Webding",
        "score": {
            iq: 105,
            hours: 101,
        },        
        "country": "Isreal"
    },
    {
        
        "name": "Django Web",
        "score": {
            iq: 110,
            hours: 150,
        },
        "country": "Libya",
    },
    {
        
        "name": "Donald Kim",
        "score": {
            iq: 170,
            hours: 161,
        },        
        "country": 'Canada'
    },
    {
        
        "name": "John Snow",
        "score": {
            iq: 145,
            hours: 181,
        },        
        "country": "Isreal"
    },
    {
        
        "name": "Game Script",
        "score": {
            iq: 190,
            hours: 100,
        },
        "country": "Libya",
    }
];

 let sortedTotal1 = [...dataSet].sort((a, b)=> b.score.hours - a.score.hours)
 let sortedSkill1 = [...dataSet].sort((a, b)=> b.score.iq - a.score.iq);
 
 let addSerialNumber =(data)=>{
     let result = [];
    for(let x=0; x < data.length; x++){
        data[x].serialNum = x+1;
        result.push(data[x])
   }    
    return result;
 }

let sortedTotal = addSerialNumber(sortedTotal1)
let sortedSkill = addSerialNumber(sortedSkill1)


try {
    let overallWinner = document.querySelector('#overallWinner')
    overallWinner.innerText = sortedTotal[0].name
    let overallWinnerScore = document.querySelector('#overallWinnerScore')
    overallWinnerScore.innerText = sortedTotal[0].score.hours
    let overallWinnerCountry = document.querySelector('#overallWinnerDiv .country span');
    overallWinnerCountry.innerText = sortedTotal[0].country

    let overallSecond = document.querySelector('#overallSecond')
    overallSecond.innerText = sortedTotal[1].name
    let overallSecondScore = document.querySelector('#overallSecondScore')
    overallSecondScore.innerText = sortedTotal[1].score.hours
    let overallSecondCountry = document.querySelector('#overallSecondDiv .country span');
    overallSecondCountry.innerText = sortedTotal[1].country

    let overallThird = document.querySelector('#overallThird')
    overallThird.innerText = sortedTotal[2].name
    let overallThirdScore = document.querySelector('#overallThirdScore')
    overallThirdScore.innerText = sortedTotal[2].score.hours
    let overallThirdCountry = document.querySelector('#overallThirdDiv .country span');
    overallThirdCountry.innerText = sortedTotal[2].country
} catch (error) {
    console.log('entry error in the overall winners section', error)    
}

try {
    let firstInSkill = document.querySelector('#firstInSkill')
    firstInSkill.innerText = sortedSkill[0].name
    let firstInSkillScore = document.querySelector('#firstInSkillScore')
    firstInSkillScore.innerText = sortedSkill[0].score.iq
    let firstInSkillDiv = document.querySelector('#firstInSkillDiv .country span');
    firstInSkillDiv.innerText = sortedSkill[0].country

    let secondInSkill = document.querySelector('#secondInSkill')
    secondInSkill.innerText = sortedSkill[1].name
    let secondInSkillScore = document.querySelector('#secondInSkillScore')
    secondInSkillScore.innerText = sortedSkill[1].score.iq
    let secondInSkillDiv = document.querySelector('#secondInSkillDiv .country span');
    secondInSkillDiv.innerText = sortedSkill[1].country

    let thirdInSkill = document.querySelector('#thirdInSkill')
    thirdInSkill.innerText = sortedSkill[2].name
    let thirdInSkillScore = document.querySelector('#thirdInSkillScore')
    thirdInSkillScore.innerText = sortedSkill[2].score.iq
    let thirdInSkillDiv  = document.querySelector('#thirdInSkillDiv .country span');
    thirdInSkillDiv.innerText = sortedSkill[2].country
} catch (error) {
    console.log('entry error in the design winners section', error)    
}

// $(document).ready(function() {
//    let t =    $('#myTable').DataTable( {
//         "scrollX": true,
//         "columnDefs": [ {
//             "searchable": false,
//             "orderable": false,
//             "targets": 0
//         } ],
//         "order": [[ 3, 'desc' ]],

//         data: addSerialNumber(sortedTotal1),
//         columns: [
//             {data: "serialNum", title: 'S/N'},
//             { data: "name", title: 'Name' },
//             { data: "country", title: 'Country' },
//             { data: "score.hours", title: 'Learning Hours' },
//             { data: "score.iq", title: 'Skill IQ' },
//         ]
//     } );
// });


const createTotalTable=(tableData)=>{
  
    $("#myTable").tabulator({
      
      autoResize: true,
      height: "100%",
      virtualDomBuffer:300,
      placeholder: 'Data Loading',
      layout: 'fitColumns',
      pagination:"local", 
      paginationSize: 10, 
      paginationSizeSelector:true,

      rowFormatter:function(row){
        if(row.getData().col == "blue"){
            row.getElement().style.backgroundColor = "#A6A6DF";
        }
    },
  
      columns:[
        {title:"S/N", field:"serialNum", sorter: 'number', editor:"false", frozen:true, widthGrow:1, minWidth: 75, },
        {title:"Name", field:"name", sorter: 'string', editor:"false", widthGrow:4, minWidth: 150, headerFilter: true},
        {title:"Country", field:"country", align:"center", sorter: 'string', editor:false, widthGrow:2,minWidth: 100, headerFilter: true},
        {title:"Total Points", field:"score.hours", align:"center", sorter: 'number', editor:false, widthGrow:2,  formatter:"money", formatterParams:{thousand:",", precision:false}, minWidth: 100, headerFilter: true},
        {title:"Skill IQ", field:"score.iq", align:"center", sorter: 'number', editor:false, widthGrow:2, formatter:"money", formatterParams:{thousand:",", precision:false}, minWidth: 100, headerFilter: true},
      ],
    });
  
    $("#myTable").tabulator('setData', tableData)
}
$(window).resize(function(){
  $("#myTable").tabulator("redraw", true);
});

createTotalTable(addSerialNumber(sortedTotal1))

const createSkillTable=(tableData)=>{
  
    $("#skillTable").tabulator({
      
      autoResize: true,
      height: "100%",
      virtualDomBuffer:300,
      placeholder: 'Data Loading',
      layout: 'fitColumns',
      pagination:"local", 
      paginationSize: 10, 
      paginationSizeSelector:true,

      rowFormatter:function(row){
        if(row.getData().col == "blue"){
            row.getElement().style.backgroundColor = "#A6A6DF";
        }
    },
  
      columns:[
        {title:"S/N", field:"serialNum", sorter: 'number', editor:"false", frozen:true, widthGrow:1, minWidth: 75},
        {title:"Name", field:"name", sorter: 'string', editor:"false", widthGrow:4, minWidth: 150, headerFilter: true},
        {title:"Country", field:"country", align:"center", sorter: 'string', editor:false, widthGrow:2,minWidth: 100, headerFilter: true},
        // {title:"Total Points", field:"score.hours", align:"center", sorter: 'number', editor:false, widthGrow:2,  formatter:"money", formatterParams:{thousand:",", precision:false}, minWidth: 100},
        {title:"Skill IQ", field:"score.iq", align:"center", sorter: 'number', editor:false, widthGrow:2, formatter:"money", formatterParams:{thousand:",", precision:false}, minWidth: 100, headerFilter: true},
      ],
    });
  
    $("#skillTable").tabulator('setData', tableData)
}
$(window).resize(function(){
  $("#skillTable").tabulator("redraw", true);
});
createSkillTable(addSerialNumber(sortedSkill1))



