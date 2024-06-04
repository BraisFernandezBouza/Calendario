//Inicializa el calendario 'evo-calendar' en tu archivo de script o en una etiqueta de script en línea
//Desde esta libreria , los eventos los tendriamo que crear en forma local. Es decir, calendarEvents:[]
$(document).ready(function() {
    $("#calendar").evoCalendar({
        theme: "Midnight blue",
        calendarEvents: [
            {
              id: '1',
              name: "Año Nuevo",
              date: "January/1/2023",
              type: "holiday",
              everyYear: true
            },
            {
              id: '2',
              name: "Día de Reyes",
              date: "January/6/2023",
              type: "holiday",
              everyYear: true
            },
            {
              id: '3',
              name: "Día de San Valentín",
              date: "February/14/2023",
              type: "event",
              color: "#ff0000"
            },
            {
              id: '4',
              name: "Carnaval",
              date: "February/20/2023",
              type: "event",
              color: "#8b0000"
            },
            {
              id: '5',
              name: "Día de la Mujer",
              date: "March/8/2023",
              type: "event",
              color: "#8b008b"
            },
            {
              id: '6',
              name: "Semana Santa",
              date: ["April/2/2023", "April/10/2023"],
              type: "event",
              color: "#581845"
            },
            {
              id: '7',
              name: "Día del Trabajo",
              date: "May/1/2023",
              type: "holiday",
              everyYear: true
            },
            {
              id: '8',
              name: "Día de la Madre",
              date: "May/7/2023",
              type: "event",
              color: "#ff69b4"
            },
            {
              id: '9',
              name: "San Juan",
              date: "June/23/2023",
              type: "event",
              color: "#ffd700"
            },
            {
              id: '10',
              name: "Día del Padre",
              date: "March/19/2023",
              type: "event",
              color: "#00008b"
            },
            {
              id: '11',
              name: "Fiestas del Carmen",
              date: "July/16/2023",
              type: "event",
              color: "#006400"
            },
            {
              id: '12',
              name: "Feria de Málaga",
              date: ["August/12/2023", "August/20/2023"],
              type: "event",
              color: "#8b4513"
            },
            {
              id: '13',
              name: "Día de la Hispanidad",
              date: "October/12/2023",
              type: "holiday",
              everyYear: true
            },
            {
              id: '14',
              name: "Halloween",
              date: "October/31/2023",
              type: "event",
              color: "#8b0000"
            },
            {
              id: '15',
              name: "Día de Todos los Santos",
              date: "November/1/2023",
              type: "holiday",
              everyYear: true
            },
            {
              id: '16',
              name: "Día de la Constitución",
              date: "December/6/2023",
              type: "holiday",
              everyYear: true
            },
            {
                id: '18',
                name: "Año Nuevo",
                date: "January/1/2024",
                type: "holiday",
                everyYear: true
              },
              {
                id: '19',
                name: "Día de Reyes",
                date: "January/6/2024",
                type: "holiday",
                everyYear: true
              },
              {
                id: '20',
                name: "Feria de Abril",
                date: "April/15/2024",
                type: "event",
                color: "#8b4513"
              },
              {
                id: '21',
                name: "Día del Trabajo",
                date: "May/1/2024",
                type: "holiday",
                everyYear: true
              },
              {
                id: '22',
                name: "Día de la Madre",
                date: "May/5/2024",
                type: "event",
                color: "#ff69b4"
              },
              {
                id: '23',
                name: "San Juan",
                date: "June/23/2024",
                type: "event",
                color: "#ffd700"
              },
              {
                id: '24',
                name: "Día del Padre",
                date: "March/17/2024",
                type: "event",
                color: "#00008b"
              },
              {
                id: '25',
                name: "Fiestas del Carmen",
                date: "July/16/2024",
                type: "event",
                color: "#006400"
              },
              {
                id: '26',
                name: "Año Nuevo",
                date: "January/1/2025",
                type: "holiday",
                everyYear: true
              },
             
              {
                id: '27',
                name: "Día de Reyes",
                date: "January/6/2025",
                type: "holiday",
                everyYear: true
              },
              {
                id: '28',
                name: "Semana Santa",
                date: "March/24/2025",
                type: "event",
                color: "#581845"
              },
              {
                id: '29',
                name: "Día del Trabajo",
                date: "May/1/2025",
                type: "holiday",
                everyYear: true
              },
              {
                id: '30',
                name: "Día de la Hispanidad",
                date: "October/12/2025",
                type: "holiday",
                everyYear: true
              },
              {
                id: '31',
                name: "Día de Todos los Santos",
                date: "November/1/2025",
                type: "holiday",
                everyYear: true
              },
              {
                id: '32',
                name: "Día de la Constitución",
                date: "December/6/2025",
                type: "holiday",
                everyYear: true
              },
              {
                id: '34',
                name: "Día de Andalucía",
                date: "February/28/2023",
                type: "holiday",
                everyYear: true
              },
              {
                id: '33',
                name: "Navidad",
                date: "December/25/2025",
                type: "holiday",
                everyYear: true
              }
          ]
      });
})