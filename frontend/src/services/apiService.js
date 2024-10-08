const API_BASE_URL = "http://localhost:8000"; // Adjust this based on your backend URL

// Fetch list of locations
export const fetchLocations = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/locations`);
    if (!response.ok) {
      throw new Error("Failed to fetch locations");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fetch menu items for a specific location
export const fetchMenuItemsByLocation = async (locationId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/v1/locations/${locationId}/menu-items`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch menu items");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Fetch menu items
export const fetchMenuItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/menu-items`);
    if (!response.ok) {
      throw new Error("Failed to fetch menu items");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};


export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch category items");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
