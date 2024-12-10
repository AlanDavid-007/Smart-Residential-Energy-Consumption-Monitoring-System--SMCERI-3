/* global bootstrap, $, jQuery */
import 'bootstrap';
import ApexCharts from 'apexcharts';
import {
  DataTable
} from 'simple-datatables';
import * as echarts from 'echarts';
import Quill from 'quill';
import tinymce from 'tinymce';
import $ from 'jquery';

window.$ = $;
window.jQuery = $;

$(() => {
  "use strict";

  // Sidebar toggle
  if ($('.toggle-sidebar-btn').length) {
    $('.toggle-sidebar-btn').on('click', function () {
      $('body').toggleClass('toggle-sidebar');
    });
  }

  // Toggle profile visibility
  $('.toggle-profile-btn').on('click', () => {
    const $profileElement = $('.toggle-profile');
    $profileElement.toggleClass('d-none');
    $profileElement.css('display', $profileElement.hasClass('d-none') ? 'none' : 'block');
  });

  // Search bar toggle
  $('.search-bar-toggle').on('click', () => {
    $('.search-bar').toggleClass('search-bar-show');
  });

  // Navbar links active state on scroll
  const navbarlinks = $('#navbar .scrollto');
  const navbarlinksActive = () => {
    const position = $(window).scrollTop() + 200;
    navbarlinks.each(function () {
      const section = $($(this).attr('href'));
      if (section.length && position >= section.offset().top && position <= section.offset().top + section.outerHeight()) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  };
  $(window).on('scroll load', navbarlinksActive);

  // Header scroll class toggle
  const headerScrolled = () => {
    $('#header').toggleClass('header-scrolled', $(window).scrollTop() > 100);
  };
  $(window).on('scroll load', headerScrolled);

  // Back to top button
  const toggleBacktotop = () => {
    $('.back-to-top').toggleClass('active', $(window).scrollTop() > 100);
  };
  $(window).on('scroll load', toggleBacktotop);

  // Bootstrap tooltips initialization
  $('[data-bs-toggle="tooltip"]').each(function () {
    new bootstrap.Tooltip(this);
  });

  // Quill editor initialization
  if ($('.quill-editor-default').length) new Quill('.quill-editor-default', {
    theme: 'snow'
  });
  if ($('.quill-editor-bubble').length) new Quill('.quill-editor-bubble', {
    theme: 'bubble'
  });
  if ($('.quill-editor-full').length) {
    new Quill('.quill-editor-full', {
      theme: 'snow',
      modules: {
        toolbar: [
          [{
            font: []
          }, {
            size: []
          }],
          ["bold", "italic", "underline", "strike"],
          [{
            color: []
          }, {
            background: []
          }],
          [{
            script: "super"
          }, {
            script: "sub"
          }],
          [{
            list: "ordered"
          }, {
            list: "bullet"
          }, {
            indent: "-1"
          }, {
            indent: "+1"
          }],
          ["direction", {
            align: []
          }],
          ["link", "image", "video"],
          ["clean"]
        ]
      }
    });
  }

  // TinyMCE initialization
  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  tinymce.init({
    selector: 'textarea.tinymce-editor',
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
    menubar: 'file edit view insert format tools table help',
    toolbar: "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | outdent indent | code fullscreen preview | save print | pagebreak anchor codesample",
    autosave_ask_before_unload: true,
    height: 600,
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
  });

  // Bootstrap validation
  $('.needs-validation').on('submit', function (event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    $(this).addClass('was-validated');
  });

  // DataTables initialization
  $('.datatable').each(function () {
    new DataTable(this, {
      perPageSelect: [5, 10, 15, ["All", -1]],
    });
  });

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event("routeChanged"));
};

// Exemplo de uso no Sidebar
$('.sidebar-nav .nav-link').on('click', function (e) {
    e.preventDefault();
    const targetPath = $(this).attr('href');
    navigateTo(targetPath);
});

  // Echarts resize handler
  const mainContainer = $('#main');
  if (mainContainer.length) {
    setTimeout(() => {
      new ResizeObserver(() => {
        $('.echart').each(function () {
          echarts.getInstanceByDom(this)?.resize();
        });
      }).observe(mainContainer[0]);
    }, 200);
  }

  // Função para inicializar o gráfico do ApexCharts
  const initializeReportsChart = () => {
    const chartElement = document.querySelector("#reportsChart");
    if (!chartElement) {
      console.warn("Chart element not found: #reportsChart");
      return;
    }

    // Verifica e destrói o gráfico anterior, se existir
    const existingChart = ApexCharts.getChartByID(chartElement.id);
    if (existingChart) {
      existingChart.destroy();
    }

    // Cria um novo gráfico
    new ApexCharts(chartElement, {
      series: [{
          name: 'Sales',
          data: [31, 40, 28, 51, 42, 82, 56]
        },
        {
          name: 'Revenue',
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: 'Customers',
          data: [15, 11, 32, 18, 9, 24, 11]
        }
      ],
      chart: {
        id: "reportsChart",
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      markers: {
        size: 4
      },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        type: 'datetime',
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    }).render();
  };

  // Listener para eventos de mudança de rota
  window.addEventListener("routeChanged", () => {
    initializeReportsChart();
  });

  // Chamada inicial para garantir que o gráfico seja renderizado na carga inicial
  initializeReportsChart();

});