import Typography from '../../../components/ui/Typography';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/Accordion';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/ui/Table';

const BundleDiscountTable = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="max-w-[max-content] hover:cursor-pointer p-0 hover:no-underline gap-0">
          <Typography variant="paragraphExtraSmall" className="mr-1">
            Bundle discounts
          </Typography>
        </AccordionTrigger>
        <AccordionContent className="mt-2 p-0">
          <Table className="border border-[#E5E7EB] rounded-[4px] border-separate border-spacing-0">
            <TableHeader>
              <TableRow className="bg-[#F3F4F6] hover:bg-[#F3F4F6]">
                <TableHead className="text-left text-[#6C737F]">IPs</TableHead>
                <TableHead className="text-right text-[#6C737F]">
                  10–24
                </TableHead>
                <TableHead className="text-right text-[#6C737F]">
                  25–49
                </TableHead>
                <TableHead className="text-right text-[#6C737F]">
                  50–99
                </TableHead>
                <TableHead className="text-right text-[#6C737F]">
                  100+
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className="text-left">Price per IP</TableCell>
                <TableCell className="text-right">$3.00</TableCell>
                <TableCell className="text-right">$2.75</TableCell>
                <TableCell className="text-right">$2.50</TableCell>
                <TableCell className="text-right">$2.25</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default BundleDiscountTable;
