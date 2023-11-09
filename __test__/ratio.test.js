const { contrastRatio, hexToRgb, relativeLuminosity, relativeLuminosityComponent, normalizeRgb } = require('../dist/js/contrast_ratio');

describe('hexToRgb', () => {
  test('convertit une valeur hexadécimale en une couleur RGB', () => {
    const couleurHex = '#FF0000';
    const resultat = hexToRgb(couleurHex);
    expect(resultat).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('convertit une valeur hexadécimale en une couleur RGB', () => {
    const couleurHex = '#FE548C';
    const resultat = hexToRgb(couleurHex);
    expect(resultat).toEqual({ r: 254, g: 84, b: 140 });
  });

  test('gère les valeurs hexadécimales courtes', () => {
    const couleurHex = '#F00';
    const resultat = hexToRgb(couleurHex);
    expect(resultat).toBeUndefined();
  });

  test('gère les valeurs hexadécimales en minuscules', () => {
    const couleurHex = '#ff0000';
    const resultat = hexToRgb(couleurHex);
    expect(resultat).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('gère les valeurs hexadécimales sans le caractère "#"', () => {
    const couleurHex = 'FF0000';
    const resultat = hexToRgb(couleurHex);
    expect(resultat).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('retourne undefined si la valeur hexadécimale est invalide', () => {
    const couleurHex = '#G00000';
    const resultat = hexToRgb(couleurHex);
    expect(resultat).toBeUndefined();
  });
});

describe('normalizeRgb', () => {
  test('normalise les composantes RGB d\'une couleur', () => {
    const couleur = { r: 127, g: 63, b: 191 };
    const resultat = normalizeRgb(couleur);
    expect(resultat).toEqual({ r: 0.4980392156862745, g: 0.24705882352941178, b: 0.7490196078431373 });
  });

  test('gère les valeurs RGB supérieures à 255', () => {
    const couleur = { r: 300, g: 400, b: 500 };
    const resultat = normalizeRgb(couleur);
    expect(resultat).toEqual({ r: 1.1764705882352942, g: 1.5686274509803921, b: 1.9607843137254901 });
  });

  test('gère les valeurs RGB négatives', () => {
    const couleur = { r: -10, g: -20, b: -30 };
    const resultat = normalizeRgb(couleur);
    expect(resultat).toEqual({ r: -0.0392156862745098, g: -0.0784313725490196, b: -0.11764705882352941 });
  });
});

describe('relativeLuminosityComponent', () => {
    test('calcule la luminosité relative d\'un composant de couleur normalisé', () => {
        const composant = 0.5;
        const resultat = relativeLuminosityComponent(composant);
        expect(resultat).toBeCloseTo(0.21404114, 5);
      });
});

describe('relativeLuminosity', () => {
  test('calcule la luminosité relative d\'une couleur RGB', () => {
    const couleur = { r: 127, g: 63, b: 191 };
    const resultat = relativeLuminosity(couleur);
    expect(resultat).toBe(0.11828627540343031);
  });
});

describe('contrastRatio', () => {
  test('calcule l\'indice de contraste entre deux couleurs', () => {
    const couleur1 = { r: 255, g: 0, b: 0 };
    const couleur2 = { r: 0, g: 0, b: 0 };
    const resultat = contrastRatio(couleur1, couleur2);
    expect(resultat).toBeCloseTo(5.25,2);
  });

  test('calcule l\'indice de contraste entre deux couleurs', () => {
    const couleur1 = { r: 255, g: 230, b: 120 };
    const couleur2 = { r: 34, g: 34, b: 34 };
    const resultat = contrastRatio(couleur1, couleur2);
    expect(resultat).toBeCloseTo(12.76,2);
  });

  test('gère les valeurs de luminosité relative proches de zéro', () => {
    const couleur1 = { r: 0, g: 0, b: 0 };
    const couleur2 = { r: 0, g: 0, b: 0 };
    const resultat = contrastRatio(couleur1, couleur2);
    expect(resultat).toBe(1);
  });

  test('gère les valeurs de luminosité relative supérieures à 1', () => {
    const couleur1 = { r: 255, g: 255, b: 255 };
    const couleur2 = { r: 255, g: 255, b: 255 };
    const resultat = contrastRatio(couleur1, couleur2);
    expect(resultat).toBe(1);
  });
});
