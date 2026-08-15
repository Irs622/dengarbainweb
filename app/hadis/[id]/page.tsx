import { hadisData } from '@/data/hadis';
import { notFound } from 'next/navigation';
import HadisDetailClient from '@/components/HadisDetailClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return hadisData.map(h => ({ id: String(h.id) }));
}

export default async function HadisDetailPage({ params }: PageProps) {
  const { id } = await params;
  const hadisId = Number(id);
  const hadis = hadisData.find(h => h.id === hadisId);
  if (!hadis) notFound();

  return <HadisDetailClient hadisId={hadisId} />;
}
