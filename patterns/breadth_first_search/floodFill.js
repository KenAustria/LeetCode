/*
    The solution is implementing the flood fill algorithm, which is used to color a connected region of pixels in an image with a
specified color. The input consists of a 2D integer array image, representing the pixels of the image, and three integer values sr,
sc, and newColor. The sr and sc values represent the starting pixel coordinates of the region to be colored, and the newColor value
is the color with which the region is to be filled.

    The algorithm starts by initializing a queue of coordinates with the starting pixel coordinates (sr, sc) and the original color
of that pixel. The original color is stored in a variable called originalColor. If the original color is already equal to the new 
color, then there is no need to perform the flood fill, and the function returns the original image.

    The algorithm then enters a loop that continues as long as there are coordinates in the queue. In each iteration of the loop, 
the first coordinate from the queue is removed, and its pixel color is checked against the original color. If the color matches, 
the pixel is colored with the new color, and its neighboring pixels are added to the queue if they have the same color as the original
pixel. This process continues until all connected pixels with the same original color have been colored with the new color.

    Finally, the function returns the modified image array.

Time = O(mn) , Space = O(mn)
    The time complexity of this algorithm is O(mn), where m is the number of rows in the image and n is the number of columns. This
is because in the worst case, every pixel in the image needs to be visited and checked.

    The space complexity of the algorithm is O(mn) as well, as the size of the queue can grow to be as large as the size of the image.
In the worst case scenario, all the pixels in the image may need to be added to the queue. However, this space complexity is still considered to be quite good because it is proportional to the size of the input.
*/
const floodFill = (image, sr, sc, newColor) => {
    const m = image.length, n = image[0].length;
    const queue = [[sr, sc]];
    const originalColor = image[sr][sc];
    
    // If the original color of the pixel is already equal to the new color,
    // no need to change anything, just return the image
    if (originalColor === newColor) {
        return image;
    }

    while (queue.length) {
        const [i, j] = queue.shift();

        // If the pixel color is equal to the original color, change it to the new color
        if (image[i][j] === originalColor) {
            image[i][j] = newColor;

            // Add the neighboring pixels to the queue if they have the original color
            if (i > 0) queue.push([i-1, j]); // top neighbor
            if (i < m-1) queue.push([i+1, j]); // bottom neighbor
            if (j > 0) queue.push([i, j-1]); // left neighbor
            if (j < n-1) queue.push([i, j+1]); // right neighbor
        }
    }
    
    return image;
};
