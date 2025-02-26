import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();
  //breadcrumbs一个面包屑导航组件，帮助用户了解当前页面在网站中的位置。比如从“发票”页面到“创建发票”页面的导航
  //fetchCustomers() 异步获取客户数据，确保在渲染页面之前获取到相关的客户信息
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
