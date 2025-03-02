import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
    params : {id: photoId},
} : {
    params: {id: string};
}){
    const id = Number(photoId);
    if(!Number.isNaN(id)){
        console.log(photoId);
        throw new Error("Invalid photo id");
    }

    return (
        <Modal>
            {/* <img src={image.url} alt=""  className="w-96"/> */}
            <FullPageImageView id={id}/>
        </Modal>
    )
}