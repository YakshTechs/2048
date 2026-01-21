/**
 * Tile constructor - represents a single tile on the game grid
 * @param {Object} position - Object with x and y coordinates
 * @param {Number} value - The tile's value (2, 4, 8, etc.). Defaults to 2
 */
function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null; // Used for animations when tile moves
  this.mergedFrom       = null; // Tracks tiles that merged together
}

/**
 * Save the current position before moving
 * Used to animate tile movement from old to new position
 */
Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

/**
 * Update the tile to a new position on the grid
 * @param {Object} position - Object with x and y coordinates
 */
Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

/**
 * Serialize the tile data for saving game state
 * @returns {Object} Object containing position and value
 */
Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
