
      // Datos para el gráfico
      var data = {
        labels:  ['Zapatos', 'Camisas', 'Balones', 'Accesorios', 'Shorts'],
        datasets: [{
          label: 'Los mas vendidos',
          data: [10, 20, 15, 25, 30],
          backgroundColor: 'rgb(21,76,121)',
          borderColor: 'rgb(21,76,121)',
          borderWidth: 1
          
        }]
      };

      // Configuración del gráfico
      var options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      // Crear el gráfico
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      });
