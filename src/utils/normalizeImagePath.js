export default function normalizeImagePath(img) {
  if (!img) return img;
  // Convert leading "./downloaded_images/..." or "downloaded_images/..." to "/downloaded_images/..."
  if (img.startsWith('./')) return img.replace('./', '/');
  if (img.startsWith('downloaded_images/')) return '/' + img;
  return img;
}
