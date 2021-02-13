export class GalleryController {
    constructor(model, view) {
        this._model = model;
        this._view = view;

        this._view.onLikeButtonClick.attach(this.addLike.bind(this));
        this._view.onPrevButtonClick.attach(this.setPrevImage.bind(this));
        this._view.onNextButtonClick.attach(this.setNextImage.bind(this));

        this._model.onUpdate.attach(this.updateView.bind(this));

        const initialData = this._model.getData();
        this.updateView(initialData);
    }

    addLike() {
        this._model.addLike();
    }

    setPrevImage() {
        this._model.decrementPhotoIndex();
    }

    setNextImage() {
        this._model.incrementPhotoIndex();
    }

    updateView(data) {
        this._view.update(data);
    }
}