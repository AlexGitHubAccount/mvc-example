import {Event} from "./event";

export class GalleryModel {
    constructor(photos) {
        const gallery = photos.map(photo => {
            return {photo, likes: 0}
        });

        this._data = {
            gallery,
            currentPhotoIndex: 0
        }

        this.onUpdate = new Event();
    }

    _notifyAboutUpdates() {
        const currentPhoto = this.getData();

        console.log(currentPhoto)

        this.onUpdate.notify(currentPhoto);
    }

    getCurrentPhotoIndex() {
        return this._data.currentPhotoIndex;
    }

    setCurrentPhotoIndex(index) {
        this._data.currentPhotoIndex = index;
    }

    getData() {
        return this._data.gallery[this.getCurrentPhotoIndex()];
    }

    addLike() {
        this._data.gallery[this.getCurrentPhotoIndex()].likes += 1;
        this._notifyAboutUpdates();
    }

    decrementPhotoIndex() {
        const index = this.getCurrentPhotoIndex();

        if (index > 0) {
            this.setCurrentPhotoIndex(index - 1);
            this._notifyAboutUpdates();
        }
    }

    incrementPhotoIndex() {
        const index = this.getCurrentPhotoIndex();

        if (index < this._data.gallery.length - 1) {
            this.setCurrentPhotoIndex(index + 1);
            this._notifyAboutUpdates();
        }
    }
}