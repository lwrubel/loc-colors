Library of Congress Colors
=========================

What colors are in images? View color swatches for images in Library of Congress digital collections.

Each block of six swatches represents an image in the selected collection. Swatch colors are determined using [k-means clustering](https://en.wikipedia.org/wiki/K-means_clustering#Algorithms). TThe colors that appear are not necessarily the most frequent colors, but the center of a cluster of color values. Since the whole image is analyzed, color targets, borders, and frames will affect the result.

This project uses thumbnail images from Library of Congress digitized collections, accessed via the [Loc.gov JSON API]().

See the [code on GitHub](https://github.com/lwrubel/loc-colors) or:
* [Jupyter notebook](Jhttp://nbviewer.jupyter.org/github/lwrubel/lc-notebooks/blob/master/Dominant%20colors.ipynb) with the Python code used to access the API and analyze the colors.
* [JSON files]() with image URLs and colors for each collection.