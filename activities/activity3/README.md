# Activity 3

This README.md file is a combination of both READMEs for each application that was build for this activity. PART 1 is for the simpleapp and PART 2 is for the musicapp.

## PART 1

### Executive Summary

This application is a simple app to demonstrate how to use angular. It has a simple UI with two components, info and shop. These components show how to handle page events and make different components appear on a button press. It also shows how to set properties to components and how the UI can manipulate them, such as a text input field.

### Screenshots

Initial application page
![](/activities/activity3/screenshots/Screenshot%202025-02-28%20100228.png)

Bootstrap table using dev tools to show responsiveness at a small screen.
![](/activities/activity3/screenshots/small_table.png)

Bootstrap table using dev tools to show responsiveness at a large screen.
![](/activities/activity3/screenshots/large_table.png)

Application Page of the name form before name is entered
![](/activities/activity3/screenshots/Screenshot%202025-02-28%20114419.png)

Application page after submitting the first form
![](/activities/activity3/screenshots/Screenshot%202025-02-28%20114534.png)

Screenshot of the dev tools console after clicking buy.
![](/activities/activity3/screenshots/Screenshot%202025-02-28%20115002.png)


### Research Questions

1. Describe @Input decorator used in info.component.ts

The @Input decorator in `info.component.ts` allows the component to receive data from its parent component. In the info component's case, it is used for the name property which means the parent component can pass a value to `info.component.ts`. Name is a dynamically set property from the outside component. It is done like this:

```html
<app-info [name]="'Luke Skywalker'"></app-info>
```

2. Describe [value] used in info.component.html

The `[value]` in `info.component.ts` is a binding used in Angular to set an element's value dynamically. Take this for example: `<input [value]="selectedProduct">` The value of this input field is bound to the `selectedProduct` property in the component. When `selectedProduct` changes, the input field will updated automatically. Changes by the user to the input field won't update`selectedProduct` unless another binding method like `[(ngModel)]` is used.


3. Describe [(ngModel)] also used in info.component.html

The `[(ngModel)]` in `info.component.hmtl` enables two-way data binding. This means that changes in the UI will update the component property, and vice versa. Here is an example: `<input [(ngModel)]="quantity">`. This will bind the input field to the `quantity` property within the component. When a user types in a new value the property in the component will change and when the value is updated within the code then the UI will reflect those changes.

## PART 2

### Executive Summary

This part of the activity is a front end application that implements multiple components and handles page events. It takes data from a json file and binds it to multiple views allowing the user to see the data and create new data for it to display. It expands on the ideas presented in the first part of the activity.

### Screenshots

Initial application page
![](/activities/activity3/screenshots/initial_page.png)

The GCU home page
![](/activities/activity3/screenshots/Screenshot%202025-02-28%20163050.png)

The create albums page
![](/activities/activity3/screenshots/Screenshot%202025-02-28%20162930.png)

Screenshot of the artist page showing the newly created artist
![](/activities/activity3/screenshots/image.png)

Screenshot of the new album on the albums page.
![](/activities/activity3/screenshots/newAlbumPageImage.png)

Screenshot of the alert box showing the version number.
![](/activities/activity3/screenshots/versionNumber.png)

### Commented Code of Music Service File

```typeScript
import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Artist } from './../models/artists.model';
import { Album } from '../models/albums.model';

// Marks this service as injectable at the root level
@Injectable({ providedIn: 'root' })
export class MusicServiceService {

  // Stores the list of albums loaded from JSON data
  albums: Album[] = exampledata;

  /**
   * Retrieves a list of unique artists from the album data
   * @returns An array of Artist objects
   */
  public getArtists(): Artist[] {
    let artists: Artist[] = [];
    let artistSet = new Set<string>(); // Using a Set to ensure uniqueness

    // Add each album's artist to the set
    this.albums.forEach(a => artistSet.add(a.artist));

    // Convert the set into an array of Artist objects
    artistSet.forEach(a => artists.push({artist: a}))
    return artists;
  }

  /**
   * Retrieves the list of all albums
   * @returns An array of Album objects
   */
  public getAlbums(): Album[] {
    return this.albums;
  }

  /**
   * Retrieves all albums by a specific artist
   * @param artistName - The name of the artist
   * @returns An array of Album objects associated with the artist
   */
  public getAlbumsOfArtist(artistName: String): Album[] {
    let albums: Album[] = [];

    // Filter albums belonging to the given artist
    this.albums.forEach(album => {
      if (album.artist == artistName) {
        albums.push(album);
      }
    });
    return albums;
  }

  /**
   * Adds a new album to the list
   * @param album - The Album object to be added
   * @returns A success indicator (1 for success)
   */
  public createAlbum(album: Album): number {
    this.albums.push(album);
    return 1;
  }

  /**
   * Updates an existing album in the list
   * @param album - The Album object with updated details
   * @returns A status code (0 for success, -1 if not found)
   */
  public updateAlbum(album: Album): number {
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].id == album.id) {
        this.albums.splice(i, 1, album); // Replace the album in the list
        return 0;
      }
    }
    return -1; // Album not found
  }

  /**
   * Deletes an album from the list by its ID
   * @param id - The ID of the album to delete
   * @returns A status code (0 for success, -1 if not found)
   */
  public deleteAlbum(id: number): number {
    for (let i = 0; i < this.albums.length; ++i) {
      if (this.albums[i].id == id) {
        this.albums.splice(i, 1); // Remove the album from the list
        return 0;
      }
    }
    return -1; // Album not found
  }
}

```

## Conclusion

This activity provided hands-on experience in building Angular applications, focusing on component interaction, data binding, and event handling. Part 1 introduced the basics of Angular with a simple app that demonstrated how to pass data between components, manipulate UI elements, and respond to user input. Part 2 expanded on these concepts by implementing a more complex music app that utilized JSON data, multiple views, and CRUD operations for managing albums and artists.