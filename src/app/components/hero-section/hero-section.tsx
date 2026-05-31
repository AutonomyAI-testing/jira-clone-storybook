import { useState } from "react";
import cx from "classix";
import { Button } from "../button";
import * as Select from "../select";

export const HeroSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">(
    "commercial"
  );
  const [billingType, setBillingType] = useState<"hourly" | "monthly">(
    "hourly"
  );
  const [priceRange, setPriceRange] = useState({ min: 500, max: 2500 });

  return (
    <div className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading Section */}
        <div className="mb-12 text-center">
          <h1
            className="mb-4 font-primary-bold text-6xl"
            style={{ color: "#22c55e" }}
          >
            Let's Find Your Ideal Space
          </h1>
          <p
            className="font-primary text-2xl"
            style={{ color: "var(--Neutral1000)" }}
          >
            Discover residential and commercial properties tailored to your
            needs
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex justify-center gap-8 border-b border-border">
          <button
            onClick={() => setActiveTab("commercial")}
            className={cx(
              "pb-4 font-primary-bold text-lg",
              activeTab === "commercial"
                ? "border-b-2 border-font"
                : "text-font-subtle"
            )}
            style={
              activeTab === "commercial"
                ? { borderColor: "var(--Neutral1000)" }
                : {}
            }
          >
            Commercial
          </button>
          <button
            onClick={() => setActiveTab("residential")}
            className={cx(
              "pb-4 font-primary-bold text-lg",
              activeTab === "residential"
                ? "border-b-2 border-font"
                : "text-font-subtle"
            )}
            style={
              activeTab === "residential"
                ? { borderColor: "var(--Neutral1000)" }
                : {}
            }
          >
            Residential
          </button>
        </div>

        {/* Search Form */}
        <div className="flex flex-wrap items-end gap-4">
          {/* Location Input */}
          <div className="flex flex-col gap-2">
            <label
              className="font-primary-bold text-sm text-font-subtle"
              style={{ color: "var(--Neutral600)" }}
            >
              Location
            </label>
            <input
              type="text"
              placeholder="Type a location"
              className="rounded border border-border px-4 py-2 font-primary text-sm text-font placeholder-font-subtle focus:outline-none"
              style={{
                borderColor: "var(--Neutral300)",
              }}
            />
          </div>

          {/* Property Type Dropdown */}
          <div className="flex flex-col gap-2">
            <label
              className="font-primary-bold text-sm text-font-subtle"
              style={{ color: "var(--Neutral600)" }}
            >
              Property Type
            </label>
            <Select.Root>
              <Select.Trigger>
                <Select.Value placeholder="Select" />
                <Select.TriggerIcon />
              </Select.Trigger>
              <Select.Content>
                <Select.Viewport>
                  <Select.Item value="apartment">
                    <Select.ItemText>Apartment</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="office">
                    <Select.ItemText>Office</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="retail">
                    <Select.ItemText>Retail</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
          </div>

          {/* Billing Type Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setBillingType("hourly")}
              className={cx(
                "rounded px-4 py-2 font-primary-bold text-sm",
                billingType === "hourly"
                  ? "bg-font text-white"
                  : "bg-elevation-surface text-font"
              )}
              style={
                billingType === "hourly"
                  ? { backgroundColor: "var(--Neutral1000)" }
                  : {}
              }
            >
              Hourly
            </button>
            <button
              onClick={() => setBillingType("monthly")}
              className={cx(
                "rounded px-4 py-2 font-primary-bold text-sm",
                billingType === "monthly"
                  ? "bg-font text-white"
                  : "bg-elevation-surface text-font"
              )}
              style={
                billingType === "monthly"
                  ? { backgroundColor: "var(--Neutral1000)" }
                  : {}
              }
            >
              Monthly
            </button>
          </div>

          {/* Space Type Dropdown */}
          <div className="flex flex-col gap-2">
            <label
              className="font-primary-bold text-sm text-font-subtle"
              style={{ color: "var(--Neutral600)" }}
            >
              Space Type
            </label>
            <Select.Root>
              <Select.Trigger>
                <Select.Value placeholder="Select" />
                <Select.TriggerIcon />
              </Select.Trigger>
              <Select.Content>
                <Select.Viewport>
                  <Select.Item value="studio">
                    <Select.ItemText>Studio</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="1bed">
                    <Select.ItemText>1 Bedroom</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="2bed">
                    <Select.ItemText>2 Bedroom</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
          </div>

          {/* Price Range Display */}
          <div className="flex items-center gap-2">
            <div
              className="rounded bg-font px-3 py-2 font-primary-bold text-xs text-white"
              style={{
                backgroundColor: "var(--Neutral1000)",
              }}
            >
              ${priceRange.min}
            </div>
            <div
              className="rounded bg-font px-3 py-2 font-primary-bold text-xs text-white"
              style={{
                backgroundColor: "var(--Neutral1000)",
              }}
            >
              ${priceRange.max}
            </div>
          </div>

          {/* Search Button */}
          <Button color="primary" variant="contained" size="md">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
