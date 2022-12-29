import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const files = $event.target.files[0];
    console.log(files);
    const imgRefe = ref(this.storage, `imagen/` + name)
    uploadBytes(imgRefe, files)
      .then(_response => { this.getImages() })
      .catch(error => console.log(error))
  }

  getImages() {
    const imageRef = ref(this.storage, 'imagen')
    list(imageRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("La url es: " + this.url);
        }
      })
      .catch(error => console.log(error))
  }
}
