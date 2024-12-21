function expressionMatter(x, y, z) {
    return Math.max(
      x + y + z,
      x * y * z,
      (x + y) * z,
      x * (y + z)
  );
    
  }