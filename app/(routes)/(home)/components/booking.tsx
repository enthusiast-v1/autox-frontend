import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarCheck, CalendarDays, SunMoon } from 'lucide-react';
import DailyBookingForm from './dailyBookingForm';

const BookingPage = () => {
  return (
    <Tabs defaultValue="daily" className="h-52">
      <TabsList>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder={
                <span className="flex justify-between items-center">
                  <SunMoon className="h-4 w-4 mx-2" /> Daily
                </span>
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <TabsTrigger
                value="hourly"
                className="flex items-center justify-center gap-2"
              >
                <SelectItem value="hourly">
                  <div className="flex items-center justify-end gap-2 pl-2 w-full">
                    <Clock className="h-4 w-4" />
                    Hourly
                  </div>
                </SelectItem>
              </TabsTrigger> */}

              <TabsTrigger
                value="daily"
                className="flex items-center justify-center gap-2"
              >
                <SelectItem value="daily">
                  <div className="flex items-center justify-end gap-2 pl-2 w-full">
                    <SunMoon className="h-4 w-4" />
                    Daily
                  </div>
                </SelectItem>
              </TabsTrigger>

              <TabsTrigger
                value="weekly"
                className="flex items-center justify-center gap-2"
              >
                <SelectItem value="weekly">
                  <div className="flex items-center justify-end gap-2 pl-2 w-full">
                    <CalendarCheck className="h-4 w-4" />
                    Weekly
                  </div>
                </SelectItem>
              </TabsTrigger>

              <TabsTrigger
                value="monthly"
                className="flex w-full items-center justify-center gap-2"
              >
                <SelectItem value="monthly">
                  <div className="flex items-center justify-end gap-2 pl-2 w-full">
                    <CalendarDays className="h-4 w-4" />
                    Monthly
                  </div>
                </SelectItem>
              </TabsTrigger>
            </SelectGroup>
          </SelectContent>
        </Select>
      </TabsList>

      {/* <TabsContent value="hourly">
        <HourlyBookingForm />
      </TabsContent> */}

      <TabsContent value="daily">
        <DailyBookingForm />
      </TabsContent>

      <TabsContent value="weekly">
        <DailyBookingForm />
      </TabsContent>

      <TabsContent value="monthly">
        <DailyBookingForm />
      </TabsContent>
    </Tabs>
  );
};

export default BookingPage;
