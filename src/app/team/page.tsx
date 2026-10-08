import { redirect } from "next/navigation";

// Team page removed — founder info is on the About page
export default function TeamRedirect() {
  redirect("/about");
}
