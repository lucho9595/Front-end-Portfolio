import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, listAll } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageServiceProyects {
  url: string = "";

  constructor(private storage: Storage) { }

  ngOnInit(){
    this.getImages();
  }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `imagen-Proyects/${file.name}`)
    uploadBytes(imgRef, file)
      .then(_response => { this.getImages() })
      .catch(error => console.log(error))
  }

  getImages() {
    const imageRef = ref(this.storage, 'imagen-Proyects')
    console.log(imageRef)
    listAll(imageRef)
      .then(async response => {
        console.log(response.items)
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("La url es: " + this.url);
        }
      })
      .catch(error => console.log(error))
  }
}
