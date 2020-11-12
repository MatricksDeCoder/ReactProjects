import React, {useContext} from "react";
import {Context} from '../Context';
import Image from '../components/Image';
import {getClass} from '../utils/'

function Photos() {

    const {photos} = useContext(Context);

    const photosElement =photos.map((photo,i) => (
            <Image
                key = {photo.id}
                className = {getClass(i)}
                img = {photo}
            /> )
    );

    return (
        <main className="photos">
            {photosElement}
        </main>
    )
}

export default Photos