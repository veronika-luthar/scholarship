let southernSurfaceSample  = [
    {
        name: 'Cyanide',
        date: '08/03/2021',
        result: 0.005,
     
             
    },
    {
        name: 'Cyanide',
        date: '10/03/2021',
        result: 0.009        
    },
    {
        name: 'Cyanide',
        date: '11/03/2021',
        result: 0.002        
    },
    {   name: 'AntimonyTotal', 
        date: '06/03/2021',
        result: 0.002        
    },
    {   name: 'ArsenicTotal', 
        date: '06/03/2021',
        result: 0.002        
    },
    {   name: 'BariumTotal', 
        date: '06/03/2021',
        result: 0.008        
    },

]


function blah() {
    let allresult={};
    let datasets=[];

    for(let i = 0; i < southernSurfaceSample.length; i++){
        
        let _name=southernSurfaceSample[i].name;
        if ( ! allresult[_name] ) {
            allresult[_name]=[];
        }
        allresult[_name].push({x: southernSurfaceSample[i].date, y: southernSurfaceSample[i].result});


    }

    for (const key in allresult) {
        let blah=allresult[key];
        let str="";
        for(let i=0; i<blah.length; i++)
        {
            str+="x: "+blah[i].x+"  y:"+blah[i].y+", ";
        }
        console.log(`${key}: ${str}`);
    }
}

blah();

// // const chartData = {
//     // labels: dataGraph.labels, 
//     datasets: [{
//       label: southernSurfaceSample.name,
//       data: dataGraph.data,
//       backgroundColor: barColor,
//       // color: "rgba(255,255,255,1)"
//     }, {
//       label: "dgsg",
//       data: dataGraph2.data,
//       backgroundColor: "rgba(255,255,255,1)"
//     }]
//   };