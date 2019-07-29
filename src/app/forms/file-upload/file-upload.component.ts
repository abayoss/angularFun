import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  ROOT_URL = 'http://my-backend.com/file-upload';
  selectedFile: File;
  imagePreview: string | ArrayBuffer;

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  // populate the selected file:
  onFileChanged(event) {
    this.selectedFile = (event.target as HTMLInputElement).files[0];
    // to show the image:
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }
  // upload it to any backend :
  onUpload() {
    this.http.post(this.ROOT_URL, this.selectedFile).subscribe();
  }
  onUploadFormData() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post(this.ROOT_URL, uploadData).subscribe(response => {
      console.log(response);
    });
  }
  onUploadFormDataAndGetUploadProgress() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http
      .post(this.ROOT_URL, uploadData, {
        reportProgress: true,
        observe: 'events'
      })
      .subscribe(event => {
        console.log(event);
        // handle event here
        // eg: HttpUploadProgressEvent:
        if (event.type === HttpEventType.UploadProgress) {
          console.log(
            'upload progress: ',
            Math.round((event.loaded / event.total) * 100) + '%'
          );
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      });
  }
}
