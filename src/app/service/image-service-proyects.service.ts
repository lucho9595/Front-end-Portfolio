import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageServiceProyects {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `proyects/` + name)
    uploadBytes(imgRef, file)
      .then(_response => { this.getImages() })
      .catch(error => console.log(error))
  }

  getImages() {
    const imageRef = ref(this.storage, 'proyects')
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
