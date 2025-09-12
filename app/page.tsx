import BackArrow from '@/components/icons/BackArrow';
import DatacenterProxies from '@/components/sections/organisms/DatacenterProxies';
import Plans from '@/components/sections/organisms/Plans';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <Button
            className="rounded-[4px] hover:cursor-pointer"
            variant="outline"
          >
            <BackArrow /> Back to all
          </Button>
          <DatacenterProxies />
          <Plans />
        </div>
      </main>
    </div>
  );
}
