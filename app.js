
    var app = angular.module('Gemstore', ['store-directives']);
    app.controller('StoreController', function () {
            this.products = gems;
        }
    );
    app.controller('GalleryController', function () {
        this.imageIndex = 0;
        this.changeImageIndex = function (image) {
            this.imageIndex = image || 0;
        };
    });

    app.controller('ReviewController', function () {
        this.review = {};
        this.addReview = function (product) {
            this.product.createdOn = Date.now();
            this.product.review.push(this.review);
            this.review = {};
        };
    });

