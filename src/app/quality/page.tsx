import { redirect } from "next/navigation";

// Quality page content has been merged into the homepage
export default function QualityRedirect() {
  redirect("/#quality");
}
