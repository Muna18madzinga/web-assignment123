export const preloadImages = (imagePaths) => {
  return Promise.all(
    imagePaths.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    })
  );
};

export const preloadModels = async (modelPaths) => {
  const { useGLTF } = await import('@react-three/drei');
  modelPaths.forEach(path => {
    useGLTF.preload(path);
  });
};

export const criticalAssets = {
  images: [
    '/images/bg.png',
    '/images/person.png',
    '/images/textures/mat1.png'
  ],
  models: [
    '/models/optimized-room.glb'
  ]
};