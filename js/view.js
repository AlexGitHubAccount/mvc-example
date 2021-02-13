import {Event} from "./event";

export class LikeView {
    constructor(elements) {
        this._elements = elements;

        this.onLikeButtonClick = new Event();
        this.onPrevButtonClick = new Event();
        this.onNextButtonClick = new Event();

        this._elements.likeButton.addEventListener("click", () => {
            this.onLikeButtonClick.notify();
        });
        this._elements.prevButton.addEventListener("click", () => {
            this.onPrevButtonClick.notify();
        });
        this._elements.nextButton.addEventListener("click", () => {
            this.onNextButtonClick.notify();
        });
    }

    update({photo, likes}) {
        this._elements.imagePlaceholder.style.backgroundImage = 'url(' + photo + ")";
        this._elements.likeNum.innerHTML = likes;
    }
}