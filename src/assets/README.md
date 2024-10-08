# src/assets

This folder contains static assets used in the Angular application.

## Structure

The `src/assets` folder is organized as follows:

- `images`: This folder contains all the image files used in the application.
- `fonts`: This folder contains any custom font files used in the application.
- `videos`: This folder contains any video files used in the application.
- `theme-base`: This folder contains the base theme files for the application.
- `themes`: This folder contains additional theme files for the application.

## Usage

To use assets from this folder in your Angular components, you can reference them using relative paths. For example, to use an image located in `src/assets/images`, you can use the following code:

```html
<img src="../assets/images/my-image.png" alt="My Image">
```

Make sure to adjust the path based on the location of your component.

## Adding New Assets

To add new assets to this folder, simply create a new subfolder based on the type of asset (e.g., `images`, `fonts`, `videos`, `theme-base`, `themes`) and place the files inside. Then, you can reference them in your code as explained above.

Remember to optimize and compress your assets to ensure optimal performance.

