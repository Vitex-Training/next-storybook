import {
  AppBreadcrumb,
  AppBreadcrumbEllipsis,
  AppBreadcrumbItem,
  AppBreadcrumbLink,
  AppBreadcrumbList,
  AppBreadcrumbPage,
  AppBreadcrumbSeparator,
} from 'src/shared/components/breadcrumb/AppBreadCrumb';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <a className='font-mono font-bold' href='/counter'>
          To counter screen
        </a>
        <div>
          <AppBreadcrumb>
            <AppBreadcrumbList>
              <AppBreadcrumbItem>
                <AppBreadcrumbLink href='#'>Home</AppBreadcrumbLink>
              </AppBreadcrumbItem>
              <AppBreadcrumbSeparator />
              <AppBreadcrumbEllipsis />
              <AppBreadcrumbSeparator />
              <AppBreadcrumbItem>
                <AppBreadcrumbLink href='#'>Component</AppBreadcrumbLink>
              </AppBreadcrumbItem>
              <AppBreadcrumbSeparator />
              <AppBreadcrumbItem>
                <AppBreadcrumbPage>Dogshitet</AppBreadcrumbPage>
              </AppBreadcrumbItem>
            </AppBreadcrumbList>
          </AppBreadcrumb>
        </div>
      </div>
    </main>
  );
}
