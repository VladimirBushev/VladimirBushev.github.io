var sliderFactory = {
    createNewSlider: function () {
        var Newslider = {
            gallery: [],
            img: null, // document.getElementById('img'),
            rb: null, //document.getElementById('right-button'),
            lb: null, //document.getElementById('left-button'),
            i: 0,

            start: function (elId) {
                var that = this;

                var el = document.querySelector('#' + elId);

                this.rb = el.querySelector('.right');
                this.lb = el.querySelector('.left');
                this.img = el.querySelector('.img');

                this.gallery.push('https://avatars.mds.yandex.net/get-pdb/245485/7e207740-b9fb-4241-94bb-30b108e36130/s1200 ');
                this.gallery.push('https://widewp.ru/file/12167');
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
            },

            right: function (e) {
                if (this.i === (this.gallery.length - 1)) {
                    this.i = 0;
                }
                else {
                    this.i++;
                }
                this.img.src = this.gallery[this.i]
            },

            left: function (e) {
                if (this.i === 0) {
                    this.i = (this.gallery.length - 1);
                }
                else {
                    this.i--;
                }
                this.img.src = this.gallery[this.i]
            }
        }
        return Newslider;
    }
}