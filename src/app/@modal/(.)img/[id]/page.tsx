import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
    params : {id: photoId},
} : {
    params: {id: string};
}){
    return (
        <Modal>
            {/* <img src={image.url} alt=""  className="w-96"/> */}
            <FullPageImageView photoId={photoId}/>
        </Modal>
    )
}