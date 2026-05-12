import { StudentDTO } from "./dto/student";
import { TeacherDTO } from "./dto/teacher";
import { UserDTO } from "./dto/user";
import { ResearchItem } from "./dto/research";
import { SidebarItem } from "./sidebar";

export interface EditorBlockProps {
  initialContent?: string;
  onChange?: (content: string) => void;
  editable?: boolean;
}

export interface HomeProfileProps {
  user: UserDTO;
  student?: StudentDTO | null;
  teacher?: TeacherDTO | null;
}

export interface ArticleUI {
  id: string | number;
  title: string;
  date: string;
  readTime: string;
  image: string;
}

export interface CategoryNewsProps {
  title: string;
  mainArticle: ArticleUI & { description: string };
  sideArticles: ArticleUI[];
}

export interface SidebarHeaderProps {
  user: UserDTO;
  student: StudentDTO | null;
  teacher: TeacherDTO | null;
}

export interface SidebarAppProps {
  user: UserDTO;
}

export interface SidebarLayoutProps {
  user: UserDTO;
  student: StudentDTO | null;
  teacher: TeacherDTO | null;
  children: React.ReactNode;
}

export interface SidebarAppFeatProps {
  items: SidebarItem[];
  user: UserDTO;
}

export interface HomeQuickLinkProps {
  user: UserDTO;
}

import { NewsItem } from "./dto/news";

export interface NewsListProps {
  data: NewsItem[];
}

export interface ResearchListProps {
  data: ResearchItem[];
}

export interface DynamicPaginationProps {
  totalPages: number;
}
