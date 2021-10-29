let southernSurfaceSample  = [
    {
        name: 'Cyanide',
        date: 08/03/2021,
        result: 0.005,
     
             
    },
    {
        name: 'Cyanide',
        date: 10/03/2021,
        result: 0.009        
    },
    {
        name: 'Cyanide',
        date: 11/03/2021,
        result: 0.002        
    },
    {   name: 'AntimonyTotal', 
        date: 06/03/2021,
        result: 0.002        
    },
    {   name: 'ArsenicTotal', 
        date: 06/03/2021,
        result: 0.002        
    },
    {   name: 'BariumTotal', 
        date: 06/03/2021,
        result: 0.008        
    },

]

datasets: [{
    label: 'Cyanide',
    data: [{
        x: 08/03/2021,
        y: 0.005,
      }, {
        x: 10/03/2021,
        y: 0.009
      }, {
        x: 11/03/2021,
        y: 0.002
      }],
    backgroundColor: barColor,
},
{
    label: 'AntimonyTotal',
    data: [ {
        x: 06/03/2021,
        y: 0.002
      }],
    backgroundColor: barColor
}
]
