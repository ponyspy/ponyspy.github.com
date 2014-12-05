describe('stereoscope.js', function() {
    var S = window.Stereoscope,
        backgrounds = [];

    before(function(done) {
        var i;
        for(i = 0; i < 3; i++) {
            var bkg = document.createElement('section');
            bkg.id = 'slide-' + i;
            bkg.setAttribute('data-type', 'background');
            bkg.setAttribute('data-speed', '4');
            backgrounds.push(bkg);
            document.body.appendChild(bkg);
        }
        done();
    });

    after(function(done) {
        var i;
        for(i = 0; i < backgrounds.length; i++) {
            document.body.removeChild(backgrounds[i]);
        }
        backgrounds = [];
        done();
    });

    beforeEach(function(done) {
        S.setOptions({
            attributes: {
                type: 'data-type',
                speed: 'data-speed'
            },
            backgroundId: 'background',
            backgroundDOMElement: 'section'
        });
        done();
    });

    it('is an object', function(done) {
        expect(S).to.be.an('object');
        done();
    });

    it('has an options object', function (done) {
        expect(S.options).to.be.an('object');
        done();
    });

    it('has an init method', function (done) {
        expect(S.init).to.be.a('function');
        done();
    });

    it('has an setOptions method', function (done) {
        expect(S.setOptions).to.be.a('function');
        done();
    });

    it('has a getBackgrounds method', function (done) {
        expect(S.getBackgrounds).to.be.a('function');
        done();
    });

    it('has a setupScrollListener method', function (done) {
        expect(S.setupScrollListener).to.be.a('function');
        done();
    });

    describe('The init method', function() {
        it('can initialize a new stereoscope object', function(done) {
            expect(S.init()).to.be.an('object');
            done();
        });

        it('can pass custom options', function(done) {
            var _s = S.init({attributes: {type: 'data-custom'}});
            expect(_s.options.attributes.type).to.equal('data-custom');
            done();
        });
    });

    describe('The setOptions method', function() {
        it('can overwrite the default options', function(done) {
            var _s = S.init();
            _s.setOptions({backgroundId: 'someid'});
            expect(_s.options.backgroundId).to.equal('someid');
            done();
        });
    });

    describe('The getBackgrounds method', function() {
        it('returns an array of background elements', function(done) {
            var _s = S.init(),
                _b = _s.getBackgrounds();
            expect(_b).to.be.an('array');
            expect(_b).to.have.length(3);
            done();
        });
    });

    // describe('The setupScrollListener method', function() {
    //     it('sets the position of the background elements', function(done) {
    //         var _s = S.init();

    //         console.dir(document.getElementById('slide-0'));

    //         done();
    //     });
    // });
});