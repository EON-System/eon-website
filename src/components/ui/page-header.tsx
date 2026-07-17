import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";


type PageHeaderProps = {
  badge: string;

  title: React.ReactNode;

  description: string;
};


export function PageHeader({
  badge,
  title,
  description,
}: PageHeaderProps) {

  return (
    <div className="mx-auto max-w-5xl text-center">

      <Badge>
        {badge}
      </Badge>


      <div className="mt-8">

        <Heading>
          {title}
        </Heading>

      </div>


      <div className="mx-auto mt-8 max-w-3xl">

        <Text variant="lead">
          {description}
        </Text>

      </div>


    </div>
  );
}