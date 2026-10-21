import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { formatPrice } from '@/lib/products';
export default function ProductCard({ product }) {
 return <article className="product-card group"><Link href={`/items/${product.id}`} className="product-photo" aria-label={`View ${product.title}`}><img src={product.image} alt={product.title} loading="lazy"/><span className="product-tag">{product.tag||product.category}</span></Link><div className="pt-4"><div className="flex items-start justify-between gap-3"><h3 className="font-serif text-[23px] leading-tight">{product.title}</h3><span className="text-sm font-medium whitespace-nowrap">{formatPrice(product.price)}</span></div><p className="mt-2 text-sm text-muted line-clamp-2">{product.short}</p><Link href={`/items/${product.id}`} className="inline-flex items-center gap-1.5 text-sm font-semibold mt-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4">View Details <ArrowUpRight size={15}/></Link></div></article>;
}
