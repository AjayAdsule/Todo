interface URLSTypes {
  [key: string]: string;
}

const URLS: URLSTypes = {
  signIn: "/auth/signin",
  signUp: "/auth/signup",
  getTodo: "/todo/get-todo",
  updateTask: "/todo/update-todo",
  deleteTask: "/todo/delete-task",
};

export default URLS;
