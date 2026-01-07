import React from 'react';

interface FeatureCard {
  num?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
}

interface LaunchpadFeatureGridProps {
  title?: string;
  subtitle?: string;
  data: FeatureCard[];
}

const LaunchpadFeatureGrid: React.FC<LaunchpadFeatureGridProps> = ({
  title,
  subtitle,
  data,
}) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        {(title || subtitle) && (
          <div className="space-y-2">
            {title && (
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base text-center font-normal">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid gap-10 pt-8 text-left md:grid-cols-3 grid-cols-1">
          {data.map((item, index) => (
            <div
              key={index}
              className="border-2 p-8 space-y-4 bg-white border-[#5556D1]/20 rounded-[40px]"
            >
              {/* Number Tag */}
              {item.num && (
                <div className="w-10 h-10 p-6 flex items-center justify-center bg-purple-50 rounded-xl shadow text-[#5556D1] font-bold text-lg">
                  {item.num}
                </div>
              )}

              {/* Title */}
              {item.title && (
                <h3
                  className="text-2xl text-[#212121] font-semibold "
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              )}

              {/* Subtitle */}
              {item.subtitle && (
                <p
                  className="text-sm text-[#555] font-medium "
                  dangerouslySetInnerHTML={{ __html: item.subtitle }}
                />
              )}

              {/* Description */}
              {item.description && (
                <p
                  className="text-base text-[#333]"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}

              {/* Features List */}
              {item.features && item.features.length > 0 && (
                <ul className="space-y-2">
                  {item.features.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-[10px] h-[10px] bg-[#5556D1] rounded-full" />
                      <span
                        className="[&_a]:text-[#5556D1] "
                        dangerouslySetInnerHTML={{ __html: point }}
                      ></span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchpadFeatureGrid;

  