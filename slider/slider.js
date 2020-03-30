function SliderDesigner(name) { 
    this.gallery = [];
    this.img = null;
    this.rb = null;
    this.lb = null;
    this.i = 0;
    this.elId = name;

    this.start = function () {
        var that = this;

        var el = document.querySelector('#' + this.elId);

        this.rb = el.querySelector('.right');
        this.lb = el.querySelector('.left');
        this.img = el.querySelector('.img');

        this.gallery.push('https://avatars.mds.yandex.net/get-pdb/245485/7e207740-b9fb-4241-94bb-30b108e36130/s1200 ');
        this.gallery.push('https://i.ytimg.com/vi/7DzGwki9eyU/maxresdefault.jpg');
        this.gallery.push('https://w.wallhaven.cc/full/p8/wallhaven-p8l3d9.jpg');
        this.gallery.push('https://delessencedansmesveines.com/wp-content/uploads/2017/02/DLEDMV-Mitsu-Lancer-Evo-5-JDM-11.jpg');
        this.gallery.push('https://cdn.motor1.com/images/mgl/kmgJR/s3/1998-subaru-impreza-22b-sti.jpg');

        this.img.src = this.gallery[this.i];

        this.rb.addEventListener('click', function (e) {
            that.right();
        });

        this.lb.addEventListener('click', function (e) {
            that.left();
        });
    };

    this.right = function (e) {
        if (this.i === (this.gallery.length - 1)) {
            this.i = 0;
        }
        else {
            this.i++;
        }
        this.img.src = this.gallery[this.i]
    };

    this.left = function (e) {
        if (this.i === 0) {
            this.i = (this.gallery.length - 1);
        }
        else {
            this.i--;
        }
        this.img.src = this.gallery[this.i]
    };
}

var slider1 = new SliderDesigner('slider1');
var slider2 = new SliderDesigner('slider2');
var slider3 = new SliderDesigner('slider3');

slider1.start();
slider2.start();
slider3.start();