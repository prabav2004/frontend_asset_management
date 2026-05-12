export function saveUser(user) {
  localStorage.setItem(
    "currentUser",
    JSON.stringify(user)
  );
}

export function getCurrentUser() {
  return JSON.parse(
    localStorage.getItem("currentUser")
  );
}

export function getRole() {
  const user = getCurrentUser();

  return user ? user.role : null;
}

export function getName() {
  const user = getCurrentUser();

  return user ? user.name : "";
}

export function logout() {
  localStorage.removeItem("currentUser");
}