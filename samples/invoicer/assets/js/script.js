'use strict';


app.config({
  smoothScroll: true,
});



// Codes to be execute when all JS files are loaded and ready to use
//
app.ready(function() {


  // Page: index.html
  // Earnings chart
  //
  if ( window['Chart'] != undefined ) {
    new Chart($("#chartjs-earnings"), {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul"],
        datasets: [
          {
            label: "Invoices",
            backgroundColor: "rgba(51,202,185,0.5)",
            borderColor: "rgba(51,202,185,0.5)",
            pointRadius: 0,
            data: [0, 6000, 8000, 5500, 2000, 5000, 4000]
          },
          {
            label: "Payments",
            backgroundColor: "rgba(243,245,246,0.8)",
            borderColor: "rgba(243,245,246,0.8)",
            pointRadius: 0,
            data: [9000, 5000, 4000, 2000, 8000, 3000, 9000]
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
      }
    });
  }



  // Page: invoices.html
  // Add a new item row in "create new invoice"
  //
  $(document).on('click', '#btn-new-item', function() {
    var html = '' +
        '<div class="form-group input-group flex-items-middle">' +
          '<select title="Item" data-provide="selectpicker" data-width="100%">' +
            '<option>Website design</option>' +
            '<option>PSD to HTML</option>' +
            '<option>Website re-design</option>' +
            '<option>UI Kit</option>' +
            '<option>Full Package</option>' +
          '</select>' +
          '<div class="input-group-input">' +
            '<input type="text" class="form-control">' +
            '<label>Quantity</label>' +
          '</div>' +
          '<a class="text-danger pl-12" id="btn-remove-item" href="#" title="Remove" data-provide="tooltip"><i class="ti-close"></i></a>' +
        '</div>';

    $(this).before(html);
  });


  // Page: invoices.html
  // Remove an item row in "create new invoice"
  //
  $(document).on('click', '#btn-remove-item', function() {
    $(this).closest('.form-group').fadeOut(function(){
      $(this).remove();
    });
  });



});
