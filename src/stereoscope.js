/**
 * @module Stereoscope
 * A nice parallax effect
 * @author Stéphane P. Péricat <contact@shortwavapp.com>
 * @license MIT
 */
(function(root, factory) {

    if (typeof define === "function" && define.amd) {
      define(factory);
    } else {    
      root.Stereoscope = factory();
    }

})(window, function() {

    return {
        /**
         * Parallax options
         * @property    {Object}    attributes
         * @property    {String}    attributes.type
         * @property    {String}    attributes.speed
         * @property    {String}    backgroundId
         * @property    {String}    backgroundDOMElement
         */
        options: {
            attributes: {
                type: 'data-type',
                speed: 'data-speed'
            },
            backgroundId: 'background',
            backgroundDOMElement: 'section'
        },
        /**
         * @property    {Array}    Store for backgrounds
         */
        backgrounds: [],
        /**
         * Initializes the parallax
         * @param   {Object}    options
         * @returns {Object}    this
         */
        init: function(options) {
            if(options) this.setOptions(options);

            this.getBackgrounds();

            return this;
        },
        /**
         * Sets custom options passed to the init method
         * @param   {Object}    opts
         * @returns {Object}    this.options
         */
        setOptions: function(opts) {
            if('object' === typeof opts) {
                for(opt in opts) {
                    if(opts.hasOwnProperty(opt)) this.options[opt] = opts[opt];
                }
            }
            return this.options;
        },
        /**
         * Gets the backgrounds
         * @returns {Nodelist}    this.backgrounds
         */
        getBackgrounds: function() {
            var i;
            
            this.backgrounds = Array.prototype.slice.call(document.querySelectorAll(this.options.backgroundDOMElement+'['+this.options.attributes.type+'='+this.options.backgroundId+']'));

            for(i = 0; i < this.backgrounds.length; i++) {
                this.setupScrollListener(this.backgrounds[i]);
            }

            return this.backgrounds;
        },
        /**
         * Sets the position of the background image based on the defined speed
         * @param   {HTMLElement}   background
         * @returns undefined
         */
        setupScrollListener: function(background) {
            var yPos, coords,
                speed = parseInt(background.getAttribute(this.options.attributes.speed));

            window.addEventListener('scroll', function() {
                var wPos =window.scrollY;
                yPos = -(wPos / speed);
                coords = '50% '+ yPos + 'px';
                background.style.backgroundPosition = coords;
            });
        }
    }

});