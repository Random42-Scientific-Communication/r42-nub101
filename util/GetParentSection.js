
import { useRouter } from "next/router";

export default function GetParentSection(){
  const router = useRouter();

  const currentUrl = router.asPath;
  const parentPath = currentUrl.split("/")[1];

  if (parentPath === "hcp") {
    return "HCP";
  } else if (parentPath === "pc") {
    return "PC";
  }
}
