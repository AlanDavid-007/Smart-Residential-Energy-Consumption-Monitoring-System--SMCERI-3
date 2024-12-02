/* global bootstrap, $, jQuery */

// Import necessary libraries
import 'bootstrap';
import {
    DataTable
} from 'simple-datatables';
import * as echarts from 'echarts';
import Quill from 'quill';
import tinymce from 'tinymce';
import $ from 'jquery';

// Make jQuery available globally
window.$ = $;
window.jQuery = $;


(function ($) {
    "use strict";

    const onscroll = (el, listener) => {
        $(el).on('scroll', listener); // Use jQuery to attach a scroll event
    };

    // Easy selector helper function
    const select = (el, all = false) => {
        el = el.trim();
        return all ? $(el) : $(el).eq(0);
    };

    // Easy event listener function
    const on = (type, el, listener, all = false) => {
        const elements = select(el, all);
        elements.on(type, listener); // Attach event to all matched elements if needed
    };

    // Sidebar toggle
    if ($('.toggle-sidebar-btn').length) {
        $('.toggle-sidebar-btn').on('click', function () {
            $('body').toggleClass('toggle-sidebar');
        });
    }


    // Search bar toggle
    if (select('.search-bar-toggle').length) {
        on('click', '.search-bar-toggle', function () {
            $('.search-bar').toggleClass('search-bar-show'); // Toggle search bar visibility
        });
    }

    // Navbar links active state on scroll
    const navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
        const position = $(window).scrollTop() + 200; // Current scroll position
        navbarlinks.each(function () {
            const navbarlink = $(this);
            const section = $(navbarlink.attr('href'));
            if (section.length && position >= section.offset().top && position <= section.offset().top + section.outerHeight()) {
                navbarlink.addClass('active'); // Add active class if the section is in view
            } else {
                navbarlink.removeClass('active'); // Remove active class if not in view
            }
        });
    };
    $(window).on('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);

    // Add .header-scrolled class to #header on scroll
    if (select('#header').length) {
        const headerScrolled = () => {
            if ($(window).scrollTop() > 100) {
                $('#header').addClass('header-scrolled');
            } else {
                $('#header').removeClass('header-scrolled');
            }
        };
        $(window).on('load', headerScrolled);
        onscroll(document, headerScrolled);
    }

    // Back to top button visibility toggle
    const backtotop = select('.back-to-top');
    if (backtotop.length) {
        const toggleBacktotop = () => {
            if ($(window).scrollTop() > 100) {
                backtotop.addClass('active');
            } else {
                backtotop.removeClass('active');
            }
        };
        $(window).on('load', toggleBacktotop);
        onscroll(document, toggleBacktotop);
    }

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call($('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl); // Initialize Bootstrap tooltip
    });

    // Initialize Quill editors
    if (select('.quill-editor-default').length) {
        new Quill('.quill-editor-default', {
            theme: 'snow'
        });
    }

    if (select('.quill-editor-bubble').length) {
        new Quill('.quill-editor-bubble', {
            theme: 'bubble'
        });
    }

    if (select('.quill-editor-full').length) {
        new Quill(".quill-editor-full", {
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
            },
            theme: "snow"
        });
    }

    // Initialize TinyMCE Editor
    const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    tinymce.init({
        selector: 'textarea.tinymce-editor',
        plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
        menubar: 'file edit view insert format tools table help',
        toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent | forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
        autosave_ask_before_unload: true,
        height: 600,
        skin: useDarkMode ? 'oxide-dark' : 'oxide',
        content_css: useDarkMode ? 'dark' : 'default',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
    });

    // Initialize Bootstrap validation check
    const needsValidation = $('.needs-validation');
    needsValidation.each(function () {
        $(this).on('submit', function (event) {
            if (!this.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            $(this).addClass('was-validated');
        });
    });

    // Initialize DataTables
    const datatables = $('.datatable');
    datatables.each(function () {
        new DataTable(this, {
            perPageSelect: [5, 10, 15, ["All", -1]],
            columns: [{
                    select: 2,
                    sortSequence: ["desc", "asc"]
                },
                {
                    select: 3,
                    sortSequence: ["desc"]
                },
                {
                    select: 4,
                    cellClass: "green",
                    headerClass: "red"
                }
            ]
        });
    });

    // Auto-resize Echart charts
    const mainContainer = $('#main');
    if (mainContainer.length) {
        setTimeout(() => {
            new ResizeObserver(function () {
                $('.echart').each(function () {
                    echarts.getInstanceByDom(this).resize();
                });
            }).observe(mainContainer[0]);
        }, 200);
    }

})(jQuery);