import {GalleryModel} from "./js/model.js";
import {LikeView} from './js/view';
import {GalleryController} from './js/controller';


let model = new GalleryModel(["images/photo-01.jpg", "images/photo-02.jpg", "images/photo-03.jpg"]),
    view = new LikeView({
        likeButton: document.querySelector(".like__like-btn"),
        prevButton: document.querySelector(".like__prev-btn"),
        nextButton: document.querySelector(".like__next-btn"),
        imagePlaceholder: document.querySelector(".like__image"),
        likeNum: document.querySelector(".like__like-num")
    }),
    controller = new GalleryController(model, view);