import { cn } from '@/lib/utils';

const PlayStoreIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn(className)}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 274"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m188.81319 178.874645c32.459028-17.822918 57.067107-31.403792 59.188129-32.459027 6.785161-3.608904 13.791921-13.15878 0-20.577082-4.453091-2.332069-28.42803-15.490849-59.188129-32.4590268l-42.642044 43.0641388z"
        fill="#ffd900"
      />
      <path
        d="m146.171146 136.443648-135.7770817 136.842869c3.1868096.422094 6.7851608-.422094 11.0272053-2.754164 8.906183-4.875185 103.3180544-56.433965 167.3919204-91.647155z"
        fill="#f43249"
      />
      <path
        d="m146.171146 136.443648 42.642044-42.8530918s-157.8420441-86.13882935-167.3919204-91.22506183c-3.5983512-2.13157461-7.6293487-2.76471558-11.2382523-2.13157461z"
        fill="#00ee76"
      />
      <path
        d="m146.171146 136.443648-135.9881287-136.20972824c-5.5188788 1.27683429-10.1830173 6.15201978-10.1830173 16.12399014v240.8046171c0 9.127782 3.60890354 15.701896 10.3940643 16.335037z"
        fill="#00d3ff"
      />
    </svg>
  );
};

export default PlayStoreIcon;
